import { Button } from "antd"

export default function AppButton({onClick}) {
    return (
        <Button type='primary' onClick={onClick}>Next</Button>
    )
}