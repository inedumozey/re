import React, { useEffect, useState, ReactNode } from 'react'
import { MdClose } from 'react-icons/md'

interface IModal {
    show: boolean,
    onClosed?: (state: boolean) => void,
    overlayClose?: boolean,
    showCloseButton?: boolean,
    children: ReactNode | string,
    position?: string,
    fromToCenter?: string,
    showActions?: boolean,
    background?: string,
    iconColor?: string,
    opacity?: string | number,
    cancelButtonColor?: string,
    confirmButtonColor?: string,
    actionButtonTextColor?: string,
    onConfirmed?: (state: boolean) => void,
    onCancelled?: (state: boolean) => void,
    groupChatLink?: string,
    zIndex?: number | string,
    style?: React.CSSProperties
}

export default function Modal(
    {
        show,
        overlayClose = true,
        showActions = false,
        children,
        onClosed = () => { },
        onConfirmed = () => { },
        onCancelled = () => { },
        position = "left",
        background = "transparent",
        cancelButtonColor = "red",
        opacity = '.6',
        showCloseButton = true,
        confirmButtonColor = "#10b981",
        iconColor = "#aaa",
        actionButtonTextColor = "#fff",
        fromToCenter = "top", zIndex = 1000000, style = {} }: IModal,
) {
    const [hide, setHide] = useState(true)

    useEffect(() => {
        setHide(() => show ? false : true)
    }, [show])

    useEffect(() => {
        const body = document.querySelector('body')!
        body.style.overflow = hide ? 'auto' : 'hidden'
    }, [hide])

    const handleClose = () => {
        setHide(true)
        onClosed(true)
    }
    const handleConfirm = () => {
        onConfirmed(true)
    }
    const handleCancel = () => {
        onCancelled(true)
    }

    return (
        <>
            <div
                style={{
                    color: '#000',
                    position: 'fixed',
                    transition: 'all .3s',
                    zIndex: +zIndex + 1,
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
                    ...style
                }}
            >
                {
                    showCloseButton ?
                        <MdClose
                            onClick={handleClose}
                            style={{ fontSize: '1rem', fontWeight: 'bold', color: iconColor, position: 'absolute', right: '0', top: '0', cursor: 'pointer' }}
                        /> : ''
                }

                {
                    position == "center" || position == "top" || position == "bottom" ?
                        <div style={{ background }}>
                            {children}
                            {
                                showActions ?
                                    <div style={{ display: 'flex', justifyContent: 'end', gap: '10px', padding: '5px' }}>
                                        <div onClick={handleCancel} style={{ padding: '5px 15px', background: cancelButtonColor, cursor: 'pointer', fontWeight: 'bold', color: actionButtonTextColor, borderRadius: '5px' }}>Cancel</div>
                                        <div onClick={handleConfirm} style={{ padding: '5px 15px', background: confirmButtonColor, cursor: 'pointer', fontWeight: 'bold', color: actionButtonTextColor, borderRadius: '5px' }}>Confirm</div>
                                    </div> : ''
                            }
                        </div> :
                        <div style={{ background }}>{children}</div>
                }
            </div>

            {/* overlay */}
            <div onClick={() => overlayClose ? handleClose() : ''} style={{ overflowY: 'auto', transition: 'all .3s', position: 'fixed', zIndex, top: 0, left: 0, bottom: 0, right: 0, background: `rgba(0,0,0,${opacity})`, display: hide ? 'none' : 'block' }}></div>
        </>
    )
}