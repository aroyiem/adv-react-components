import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Form, {FormHandle} from "./components/Form.tsx";
import {useRef} from "react";

function App() {
    //const input = useRef<HTMLInputElement>(null);
    const customForm = useRef<FormHandle>(null);

    function handlSave(data: unknown) {
        const extractedData = data as { name: string; age: string;};
        console.log(extractedData);
        customForm.current?.clear();
    }

    return (
        <main>
            {/*<Input label='Your name' id='name' type='text'/>
          <Input label='Your age' id='age' type='number'/>
          <Input label='Test' id='test' ref={input}/>
          <p>
              <Button>A Button</Button>
          </p>

          <p>
              <Button href='https://google.com'>A Link</Button>
          </p>
          <Container as={Button}>Click me</Container>*/}
            <Form onSave={handlSave} ref={customForm}>
                <Input label='Your name' id='name' type='text'/>
                <Input label='Your age' id='age' type='number'/>
                <p>
                    <Button>Save</Button>
                </p>
            </Form>
        </main>
    );
}


export default App;
