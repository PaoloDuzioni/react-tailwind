const Button = ({ primary, margin, link, children, click, ...attrs }) => {
    // Classes common
    let classes =
        'py-2 px-4 text-sm text-white uppercase rounded-3xl transition-colors duration-300';

    // Spacing
    if (margin) {
        classes += ` ${margin}`;
    }

    // Types
    if (primary) {
        classes += ' bg-indigo-500 hover:bg-indigo-800';
    } else {
        classes += ' bg-black hover:bg-gray-700';
    }

    // Dynamic tag name
    const CustomTag = link ? 'a' : 'button';

    // Rendering
    return (
        <CustomTag {...attrs} className={classes} onClick={click}>
            {children}
        </CustomTag>
    );
};

export default Button;
