import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { useDispatch } from 'react-redux'

function AddContentForm(props) {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const onFormChange = (e) => {
        const {value} = e.target

        setInput(value)
        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(props.submitEvent(input))

        setInput("")
    }

    return (
        
        <Form name="addContentForm" className="addContentForm" onSubmit={handleSubmit}>
            <InputGroup className="mb-3" >
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">{props.btnText}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    name={props.name}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={onFormChange}
                    value={input}
                />
            <Button className="addBtn" variant="primary" onClick={handleSubmit}>{props.btnText}</Button>
            </InputGroup>
        </Form>
    )
}

export default AddContentForm