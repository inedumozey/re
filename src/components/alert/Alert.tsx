import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';

interface IColor {
    bgColor_error: any
    borderColor_error: any
    bgColor_success: any
    borderColor_success: any
    bgColor_warning: any
    borderColor_warning: any
}

const colors: IColor = {
    bgColor_error: "rgb(136 21 21 / 30%)",
    borderColor_error: "rgb(245 87 87)",
    bgColor_success: "rgb(156 233 159 / 30%)",

    borderColor_success: "rgb(86 159 3)",
    bgColor_warning: "rgb(247 244 158 / 75%)",
    borderColor_warning: "rgb(199 166 8)",
}

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
                            return colors.bgColor_warning
                        }
                        else if (type === 'error') {
                            return colors.bgColor_error
                        }
                        else {
                            return colors.bgColor_success
                        }
                    }()),
                    fontSize: '.8rem',
                    color: (function () {
                        if (type === 'warning') {
                            return colors.borderColor_success
                        }
                        else if (type === 'error') {
                            return colors.borderColor_error
                        }
                        else {
                            return colors.borderColor_success
                        }
                    }()),
                    borderRadius: '5px',
                    border: (function () {
                        if (type === 'warning') {
                            return colors.borderColor_warning
                        }
                        else if (type === 'error') {
                            return colors.borderColor_error
                        }
                        else {
                            return colors.borderColor_success
                        }
                    }()),
                }}
            >
                <MdClose
                    onClick={handleClose}
                    style={{
                        color: (function () {
                            if (type === 'warning') {
                                return colors.borderColor_warning
                            }
                            else if (type === 'error') {
                                return colors.borderColor_error
                            }
                            else {
                                return colors.borderColor_success
                            }
                        }()),
                        fontSize: '1.3rem',
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

