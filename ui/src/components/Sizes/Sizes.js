import './Sizes.scss';

const Sizes = props => {
    const sizesElemets = props.sizes.map(size => {
        return (
            <div
                key={size}
                id={size}
                className={
                    props.selectedSize === size
                        ? 'Sizes-values--size-active'
                        : 'Sizes-values--size'
                }
                onClick={() => props.handleClick(size)}
            >
                {size}
            </div>
        );
    });

    return (
        <div className="Sizes-container">
            <div className="sizes-title">
                <span>{`מידות :`}</span>
            </div>
            <div className="Sizes-values">{sizesElemets}</div>
        </div>
    );
};

export default Sizes;
