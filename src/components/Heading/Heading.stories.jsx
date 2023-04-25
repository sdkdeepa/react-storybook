import Heading from './Heading';

export default {
    title: "components/Heading",
    component: Heading,
    argTypes:{
        level:{control: "radio"},
        children: {control: "text"},
    }
}

// without the definition of args, no controls are applied. 
export function Default(args) {
    return <Heading {...args} />
}

Default.args= {
    children: "Default Heading"
}

export function Heading2(args) {
    return <Heading {...args} />
}


// without the definition of args, no controls are applied. 
// If you want to apply args to a component then you need to use JS PropTypes, in your JSX file