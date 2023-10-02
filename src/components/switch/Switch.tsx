import React, { FunctionComponent } from 'react'

interface ISwitch {
    value?: number,
    thumbColor?: string,
    tractColor?: string
}

interface IConstant {
    tractWidth: number,
    tractHeight: number,
    thumbWidth: number,
}

function Switch({ value, thumbColor, tractColor }: ISwitch) {
    const constant: IConstant = {
        tractWidth: 29,
        tractHeight: 12,
        thumbWidth: 17,
    }

    return (
        <div
            // tract
            style={{
                border: thumbColor ? `1px solid ${thumbColor}` : `1px solid ${"rgb(5, 152, 157)"}`,
                width: constant.tractWidth + 'px',
                backgroundColor: tractColor ? tractColor : '#fff',
                height: constant.tractHeight + 'px',
                borderRadius: '20px',
                zIndex: 1000,
                position: 'relative'
            }}
        >
            <div
                // thumb
                style={{
                    height: constant.thumbWidth + 'px',
                    top: '50%',
                    left: value ? constant.tractWidth - constant.thumbWidth + 'px' : 0,
                    right: value ? 0 : constant.tractWidth - constant.thumbWidth + 'px',
                    position: 'absolute',
                    transform: "translateY(-50%)",
                    borderRadius: '50%',
                    backgroundColor: thumbColor ? thumbColor : "rgb(5, 152, 157)",
                    width: constant.thumbWidth + 'px'
                }}
            ></div>
        </div>
    );
}
export default Switch;