import { IoLogoWhatsapp } from 'react-icons/io'
import * as React from "react";
import './style.css'
import getFontSize from '../../utils/getFontSize';
import getPixel from '../../utils/getPixel';

interface IWhatsAppBtn {
    mobileNumber?: string,
    size?: string,
    animate?: boolean,
    style?: React.CSSProperties,
    position?: string,
    groupChatLink?: string
}

interface Iposition {
    bottom?: string,
    right?: string,
    left?: string,
    transform?: string,
}

function WhatsAppBtn({ mobileNumber = "", size = "50px", animate = true, style, position = "", groupChatLink = "" }: IWhatsAppBtn) {
    let px = getPixel(size)
    const fontSize = getFontSize(px)

    const positionPoint: Iposition = {}
    if (position == 'left') {
        positionPoint.bottom = '15px'
        positionPoint.left = '15px'
    }
    else if (position == 'center') {
        positionPoint.bottom = '15px'
        positionPoint.left = '50%'
        positionPoint.transform = "translateX(-50%)"
    }
    else {
        positionPoint.bottom = '15px'
        positionPoint.right = '15px'
    }

    return (
        <a
            href={groupChatLink ? groupChatLink : `https://api.whatsapp.com/send?phone=${mobileNumber}`}
            target='_blank'
            style={{
                position: 'fixed',
                ...positionPoint,
                zIndex: '1000',
                ...style,
                display: 'flex',
                cursor: 'pointer',
                width: size,
                height: size,
                borderRadius: '50%'
            }}
        >
            <span
                style={{
                    position: 'absolute',
                    display: 'inline-flex',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: animate ? 'green' : 'transparent',
                    opacity: '.75'
                }}
                className={`${animate ? 'animate' : ''}`}
            ></span>
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        background: '#fff',
                        borderRadius: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        height: '80%',
                        zIndex: -1,
                    }}
                ></div>
                <IoLogoWhatsapp style={{ fontSize, color: 'green', fontWeight: 'bold' }} />
            </div>
        </a>
    )
}
export default WhatsAppBtn;