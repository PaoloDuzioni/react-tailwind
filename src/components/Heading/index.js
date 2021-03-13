import PropTypes from 'prop-types';

const Heading = ({ as, margin, center, color, children }) => {
    // Commons
    const commons = 'font-bold';

    // Colors
    const colors = {
        normal: 'text-gray-400',
        black: 'text-black',
        white: 'text-white',
        primary: 'text-indigo-500',
    };

    // Size
    const size = {
        h1: 'text-4xl',
        h2: 'text-3xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base',
    };

    // Classes composition
    const classes = `${commons}
        ${as ? size[as] : size['h1']}
        ${center && 'text-center'}
        ${color ? colors[color] : colors['normal']}
        ${margin && margin}`;

    // Headign tag
    const Heading = as ? as : 'h1';

    // Rendering
    return <Heading className={classes}>{children}</Heading>;
};

/**
 * Props typechecking
 */
Heading.propTypes = {
    as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    center: PropTypes.bool,
    color: PropTypes.oneOf(['normal', 'black', 'white', 'primary']),
};

export default Heading;
