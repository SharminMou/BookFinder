import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
    { key: 1, text: 'A-Z', value: 1 },
    { key: 2, text: 'Z-A', value: 2 },
    { key: 3, text: 'Newest', value: 3 },
    { key: 4, text: 'Oldest', value: 4 },
]

const DropdownExampleSimple = () => (
    <Dropdown placeholder='State'  selection options={options} />
)


export default DropdownExampleSimple