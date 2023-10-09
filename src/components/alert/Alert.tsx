import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'

interface IFixedNav {
    show: boolean,
    type?: string,
    children: React.ReactElement | string,
    onClosed?: (close: boolean) => void,
}

export default function Alert(
    {
        show,
        type = "success",
        children,
        onClosed = () => { } }: IFixedNav
) {
    const [hide, setHide] = useState(true)

    const handleClose = () => {
        setHide(true)
        onClosed!(hide)
    }

    useEffect(() => {
        setHide(() => show ? false : true)
    }, [show])

    return (
        <>
            <div
                style={{
                    width: '100%',
                    display: hide ? 'none' : 'block',
                    padding: '12px',
                    position: 'relative',
                    background: (function () {
                        if (type === 'warning') {
                            return 'rgb(247 244 158 / 75%)'
                        }
                        else if (type === 'error') {
                            return 'rgb(255 152 152 / 30%)'
                        }
                        else {
                            return 'rgb(156 233 159 / 30%)'
                        }
                    }()),
                    fontSize: '.8rem',
                    color: (function () {
                        if (type === 'warning') {
                            return 'rgb(199 166 8)'
                        }
                        else if (type === 'error') {
                            return 'rgb(227 6 6)'
                        }
                        else {
                            return 'rgb(86 159 3)'
                        }
                    }()),
                    borderRadius: '5px',
                    border: (function () {
                        if (type === 'warning') {
                            return '1px solid rgb(199 166 8)'
                        }
                        else if (type === 'error') {
                            return '1px solid rgb(227 6 6)'
                        }
                        else {
                            return '1px solid rgb(86 159 3)'
                        }
                    }()),
                }}
            >
                <MdClose
                    onClick={() => handleClose}
                    style={{
                        color: (function () {
                            if (type === 'warning') {
                                return '#b1a411'
                            }
                            else if (type === 'error') {
                                return '#ff0808a1'
                            }
                            else {
                                return '#87d5b8d1'
                            }
                        }()),
                        fontSize: '1.2rem',
                        padding: '2px',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        position: 'absolute',
                        right: '2px',
                        top: '2px',
                        userSelect: 'none',
                    }}
                />
                <div>{children}</div>
            </div>
        </>
    )
}

