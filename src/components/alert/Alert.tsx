import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';

interface IColor {
    bgColor_error: any
    borderColor_error: any
    bgColor_success: any
    borderColor_success: any
    bgColor_warning: any
    borderColor_warning: any,
}

const colors: IColor = {
    bgColor_error: "rgb(254 154 154 / 90%)",
    bgColor_success: "rgb(145 255 150 / 86%)",
    bgColor_warning: "rgb(253 249 127)",
    borderColor_error: "rgb(249 5 5)",
    borderColor_success: "rgb(33 60 3)",
    borderColor_warning: "rgb(199 166 8)"
}

interface IFixedNav {
    show: boolean,
    type?: string,
    children: React.ReactElement | string,
    onClosed?: (close: boolean) => void,
    float: boolean,
    position: string,
    shadow: boolean,
    width: any,
    border: boolean
}

export default function Alert(
    {
        show,
        type = "success",
        children,
        float = false,
        position = 'top-right',
        shadow = false,
        width = '100%',
        border = true,
        onClosed = () => { } }: IFixedNav,
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
                    zIndex: 50000,
                    boxShadow: shadow ? 'rgb(123, 107, 122) 1px -1px 9px 0px' : '',
                    width: width,
                    display: hide ? 'none' : 'block',
                    padding: '12px',
                    position: float ? 'fixed' : 'relative',
                    top: (function () {
                        if (position === 'top-left') {
                            return '5px'
                        }
                        else if (position === 'top-right') {
                            return '5px'
                        }
                        else {
                            return ''
                        }
                    }()),
                    left: (function () {
                        if (position === 'top-left') {
                            return '5px'
                        }
                        else if (position === 'bottom-left') {
                            return '5px'
                        }
                        else {
                            return ''
                        }
                    }()),
                    right: (function () {
                        if (position === 'top-right') {
                            return '5px'
                        }
                        else if (position === 'bottom-right') {
                            return '5px'
                        }
                        else {
                            return ''
                        }
                    }()),
                    bottom: (function () {
                        if (position === 'bottom-left') {
                            return '5px'
                        }
                        else if (position === 'bottom-right') {
                            return '5px'
                        }
                        else {
                            return ''
                        }
                    }()),
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
                    border: !border ? '' : (function () {
                        if (type === 'warning') {
                            return `1px solid ${colors.borderColor_warning}`
                        }
                        else if (type === 'error') {
                            return `1px solid ${colors.borderColor_error}`
                        }
                        else {
                            return `1px solid ${colors.borderColor_success}`
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

