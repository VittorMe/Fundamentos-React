export default props => {
    if (props.teste) {
        return props.children
    } else {
        return false
    }
}

export const Else = props => props.children