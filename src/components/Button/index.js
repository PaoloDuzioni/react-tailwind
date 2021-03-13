import PropTypes from 'prop-types';

const Button = ({ type, size, margin, link, children, click, ...attrs }) => {
    /* APPARENCE */
    // Commons
    const commons =
        'inline-block text-white uppercase rounded-3xl transition-colors duration-300';

    // Types
    const btnType = {
        primary: 'bg-indigo-500 hover:bg-indigo-800',
        basic: 'bg-black hover:bg-gray-700',
    };

    // Sizes
    const btnSize = {
        small: 'py-1.5 px-2.5 text-xs',
        medium: 'py-2 px-4 text-sm',
        large: 'py-2.5 px-6 text-lg',
    };

    // Classes composition
    const classes = `${commons}
        ${type ? btnType[type] : btnType['basic']}
        ${size ? btnSize[size] : btnSize['medium']}
        ${margin && margin}`;

    /* Dynamic tag */
    const CustomTag = link ? 'a' : 'button';

    /* RENDERING */
    return (
        <CustomTag {...attrs} className={classes} onClick={click}>
            {children}
        </CustomTag>
    );
};

/**
 * Props typechecking
 */
Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'basic']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    click: PropTypes.func,
};

export default Button;
