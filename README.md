# Rreact-lab
React-lab contains Switch and WhatsAppBtn components


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
