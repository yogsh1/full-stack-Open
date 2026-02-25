const Button = (props) => {
    // console.log(props);
    const {onClick, text} = props;
    // console.log(onClick, text);
    return <button onClick={onClick}>{text}</button>;
};

export default Button;
