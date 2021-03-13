import PropTypes from 'prop-types';

const Heading = ({ as, margin, center, children }) => {
    // Commons
    const commons = 'text-gray-400';

    // Types
    const type = {
        h1: 'text-4xl',
        h2: 'text-3xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base',
    };

    // Classes composition
    const classes = `${commons}
        ${as ? type[as] : type['h1']}
        ${margin && margin}
        ${center && 'text-center'}`;

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
};

export default Heading;
