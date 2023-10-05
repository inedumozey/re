import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'


interface IFixedNav {
    show: boolean,
    isClosed?: (close: boolean) => void,
    overlayClose?: boolean,
    children: React.ReactElement,
    position?: string,
    fromToCenter?: string,
    showActions?: boolean,
    background?: string,
    iconColor?: string,
    cancelBtnColor?: string,
    confirmBtnColor?: string,
    actionButtonTextColor?: string,
    isConfirmed?: (close: boolean) => void,
    isCancelled?: (close: boolean) => void,
}

export default function Modal(
    {
        show,
        overlayClose = true,
        showActions = false,
        children,
        isClosed,
        isConfirmed = () => { },
        isCancelled = () => { },
        position = "left",
        background = "#fff",
        cancelBtnColor = "red",
        confirmBtnColor = "#10b981",
        iconColor = "#aaa",
        actionButtonTextColor = "#fff",
        fromToCenter = "top" }: IFixedNav
) {
    const [hide, setHide] = useState(true)

    useEffect(() => {
        setHide(() => show ? false : true)
    }, [show])

    useEffect(() => {
        handleClose();
        const body = document.querySelector('body')!
        body.style.overflow = hide ? 'auto' : 'hidden'
    }, [hide])

    const handleClose = () => isClosed!(hide)

    const handleConfirm = () => {
        isConfirmed!(true)
    }
    const handleCancel = () => {
        isCancelled!(true)
    }

    return (
        <>
            <div
                style={{
                    color: '#000',
                    zIndex: 1001,
                    position: 'fixed',
                    transition: 'all .3s',
                    top: (function (): any {
                        if (position != 'bottom' && position != 'center') {
                            return '0'
                        }
                        if (position == 'center') {
                            if (hide) {
                                if (fromToCenter == 'bottom') {
                                    return '100%'
                                }
                                else {
                                    return '-100%'
                                }
                            }
                            else {
                                return '50%'
                            }
                        }

                    }()),
                    right: (function (): any {
                        if (position == 'bottom' || position == 'top' || position == 'right') {
                            return '0'
                        }
                    }()),
                    bottom: 0,
                    left: (function (): any {
                        if (position != 'center' && position != 'right') {
                            return '0'
                        }
                        if (position == 'center') {
                            return '50%'
                        }
                    }()),
                    transform: (function (): any {
                        if (position == 'right') {
                            return `${hide ? 'translateX(100%)' : 'translateX(0)'}`
                        }
                        else if (position == 'top') {
                            return `${hide ? 'translateY(-100%)' : 'translateY(0)'}`
                        }
                        else if (position == 'bottom') {
                            return `${hide ? 'translateY(100%)' : 'translateY(0)'}`
                        }
                        else if (position == 'center') {
                            return `
                                ${hide ? 'translate(-50%, 100%)' : 'translate(-50%, -50%)'}
                            `
                        }
                        else {
                            return `${hide ? 'translateX(-100%)' : 'translateX(0)'}`
                        }
                    }()),
                }}
            >
                <MdClose
                    onClick={() => setHide(true)}
                    style={{ fontSize: '1rem', fontWeight: 'bold', color: iconColor, position: 'absolute', right: '0', top: '0', cursor: 'pointer' }}
                />
                {
                    position == "center" || position == "top" || position == "bottom" ?
                        <div style={{ background: 'teal' }}>
                            {children}
                            {
                                showActions ?
                                    <div style={{ display: 'flex', justifyContent: 'end', gap: '10px', padding: '5px' }}>
                                        <div onClick={handleCancel} style={{ padding: '5px 15px', background: cancelBtnColor, cursor: 'pointer', fontWeight: 'bold', color: actionButtonTextColor, borderRadius: '5px' }}>Cancel</div>
                                        <div onClick={handleConfirm} style={{ padding: '5px 15px', background: confirmBtnColor, cursor: 'pointer', fontWeight: 'bold', color: actionButtonTextColor, borderRadius: '5px' }}>Confirm</div>
                                    </div> : ''
                            }
                        </div> :
                        <div style={{ background }}>{children}</div>
                }
            </div>

            {/* overlay */}
            <div onClick={() => overlayClose ? setHide(true) : ''} style={{ transition: 'all .3s', position: 'fixed', zIndex: 1000, top: 0, left: 0, bottom: 0, right: 0, background: 'rgba(0,0,0,.7)', display: hide ? 'none' : 'block' }}></div>
        </>
    )
}