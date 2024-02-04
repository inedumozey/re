# Rreact-lab
React-lab contains Switch, WhatsAppBtn and Modal components


## Switch Components

It is a toggle button (switch) react component library 
* It receives 3 props; value, thumbColor and tractColor
 1. value is either true or false
 2. thembColor is the background color of the thumb
 2. tractColor is the background color of the tract

### installation

`npm install @mozeyinedu/switch`

### Usage

```
import React, {useState} from 'react';
import {Switch} from '@mozeyinedu/switch';

function App() {
    const [val, setVal] = useState(false);
    
    return (
    <>
        <div onClick={()=>setVal(!val)} >
            <Switch 
                value={val}
                tractColor={val ? "red" : "black"}
                thumbColor={val ? "black" : "red"}
            />
        </div>
    </>
    );
}

export default App;
```

* You can then dynamically change the background color of a container uisng a tenary operator


```

function App() {
    const [val, setVal] = useState(false);
    
    return (
    <>
        <div
            style={{
                margin: '20px',
                width:'200px',
                height:'100px',
                background: val ? "#cdc" : '#444',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                onClick={()=>setVal(!val)}
            >
                <Switch 
                    value={val}
                    tractColor={val ? "red" : "black"}
                    thumbColor={val ? "black" : "red"}
                />
            </div>
        </div>
    </>
    );
}

export default App;

```



## WhatsAppBtn Components

It is a whatsApp button that allow when clicked, redirects to open whatsApp app/web
* It receives optional 6 props; mobileNumber, size, animate, position,  groupChatLink and style
 1. mobileNumber Is the whatsApp mobile number (e.g. 2348033333333 and not +2348033333333 or 08033333333 for a Nigeria mobile number)
 2. size: Is the size of the button, it can be any of css dimensional unit (e.g. px, rem, em, % etc). default is 50px
 2. animate: true or false to either set or remove the pinging animation, default is set to true
 4. position: position in the window's bottom (right, center or left), default is right
 5. style: Any other style
 6. groupChatLink: link for group chat. If set, link to individual chat is deactivated 
 

```
import {WhatsAppBtn} from '@mozeyinedu/react-lab';

function App() {
    return <WhatsAppBtn mobileNumber="2348033333333" size="50px" animate={true} style={{...}} />
}

export default App;

```

The default props
position is fixed and placed 10px from right and bottom of the webpage
mobileNumber is empty
size is 70px and
animate is true
style={{position: 'fixed', right: '15px', bottom: '15px', zIndex: '1000'}}

```
<WhatsAppBtn mobileNumber="2348033333333" />
```


### Customization
By default, the position is fixed and placed 10px from right and bottom of the webpage, this can be changed.
For example, you want to place the button in a div in a contact page, it should be within the flow of the containing div and not the entire document, hence you change the position from fixed to absolute and set the position of the containing div relative, tuerk the position (left, right, top and bottom)

```

<div style={{ width: "200px", height: "80px", border: "1px solid red", position: 'relative' }}>
    <WhatsAppBtn mobileNumber="2348033333333" size="50px" animate={false} style={{ position: 'absolute', left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
</div>

```

# Modal

## Usage
`import {Modal} from "@mozeyinedu/react-lab"`

`<Modal props={...}>...</Modal>`

### Props
1. show: It's required. It toggles the modal. It accepts boolean: `true` or `false`
2. position: Where to set the modal. It accepts `'center'`, `'top'`, `'right'`, `'bottom'` and `'left'` (default is `'left'`). Default is set to `'left'`
3. fromToCenter: This only works when position is set to `'center'`. It accepts string: `'top'` and `'bottom'`. This tells where the modal comes from. Default is set to `'top`
4. children: child prop. It is required
5. overlayClose: It accepts boolean: `true` or `false`. It tells whether the modal should be closed when the overlay is clicked. Default is set to be `true`
6. showActions: It accepts boolean: `true` or `false`. It tells whether to show `'Cancel Button` and `Confirm Button` buttons. This only works when position is set to `'center'` Default is set to be `false`
7. onClosed: A callback function, it is called back when the modal is closed
8. onConfirmed: A callback funtion, it is called back when `Cancel Button` is clicked
9. onCancelled: A callback funtion, it is called back when `Cancel Button` is clicked
10. background: Background of the modal. Default is white
11. iconColor: Close icon background. Default is #aaa
12. cancelBtnColor: Cancelled Button background color. Default is `'red'`
13. confirmBtnColor: Confirmed Button background color. Default is `'#10b981'` (Emerald green)
14. ActionButtonTextColor: Action buttons (`'Cancelled Button` & `'Confirmed Button`) text color: Default is `'#fff`.
15. opacity: accept 0, 0.1, 0.2 ..., 1. Default is `'0.6`


```
    import React, { useState } from 'react'
    import Modal from '@/components/Modal';

    export default function SideNav() {
        const [openModal, setOpenModal] = useState(false)

        function handleOpenModal() {
            setOpenModal(true)
        }

        return (
            <div>
                <button onClick={handleOpenModal}>Open modal</button>

                <Modal
                    show={openModal} // toggles the modal, accepts true or false
                    iconColor="red" // close icon color (default is #aaa)
                    fromToCenter="bottom" // accepts only top or bottom, only works when position is set to center
                    background="#fff" // bg color, it does not affect the children background's color
                    position='center' // other options are top, right, bottom and left (default is left)
                    showActions={true} // to show cancel and confirm buttons, only works when position is set to center, top or bottom
                    onClosed={(e) => { setOpenModal(false); console.log(e) }} // callback when modal is closed, returns true
                    onConfirmed={(status) => {
                        if (status == true) {
                            setOpenModal(false)
                        }
                    }}
                    onCancelled={(status) => {
                        if (status == true) {
                            setOpenModal(false)
                        }
                    }}
                >
                    <div className='w-[300px] h-[200px]'>Modal Children</div>
                </Modal>
            </div >
        )
    }
```
![center-1.png]("./assets/center-1.png")


```
    import React, { useState } from 'react'
    import Modal from '@/components/Modal';

    export default function SideNav() {
        const [openModal, setOpenModal] = useState(false)

        function handleOpenModal() {
            setOpenModal(true)
        }

        return (
            <div>
                <button onClick={handleOpenModal}>Open modal</button>

                <Modal
                    show={openModal}
                    iconColor="red"
                    background="#fff"
                    position='left'
                    onClosed={(e) => { setOpenModal(false); console.log(e) }} // callback when modal is closed, returns true
                >
                    <div className='w-[300px] h-[200px]'>Modal Children</div>
                </Modal>
            </div >
        )
    }
```
![left.png]("./assets/left.png")



# Modal

## Usage
`import {Alert} from "@mozeyinedu/react-lab"`

`<Alert props={...}>...</Alert>`

### Props
1. show: It's required. It toggles the Alert. It accepts boolean: `true` or `false`
2. type: `'success`, `'warning`, `'error`. Default is `'success`
3. onClosed: A callback function, it is called back when the alert is closed

```
    import React from 'react'
    type TMsg = {
        type: string,
        isMsg: boolean,
        msg: string
    }
    
    export default function Component() {
        
        return (
            <Alert
                show={true}
                type={'error'} // success or false
                onClosed={(e) => { console.log(e)}} // fires when Alert is closed
                float={true} // or true, default is false
                border={false} // or false
                shadow={true} // or true
                position='top-right' // or top left, bottom right or bottom right. this only works when float is set to true, default is top-right
                width='400px' // default is 100% of its containter
            >
                error occured
            </Alert>
        )
    }
```