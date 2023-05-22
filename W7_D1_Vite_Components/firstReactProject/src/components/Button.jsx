function Button({title, color}) {
    // return(<button className="btn btn-outline-{color}" type="submit">{title}</button>);
    return(<button className={"btn btn-outline-" + color} type="submit">{title}</button>);
}

export default Button;