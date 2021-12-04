import React, {useEffect} from 'react';
import "./style.css";

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

return (
    <header className="flex-row px-1">
        <h2 className="bri">
                <a href="./">Bri Cassellius</a>
        </h2>
        <nav>
            <ul className="flex-row">
            {categories.map((category) => (
                <li
                className={`mx-1 ${
                  currentCategory.name === category.name? 'navActive':'hoverable'
                  }`}
                key={category.name}
                >
                    <span
                        onClick={() => {
                            setCurrentCategory(category);
                        }}
                    >
                        {category.name}
                    </span>
                </li>
            ))}
            </ul>
        </nav>
    </header>
  );
}

export default Navigation;