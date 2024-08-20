import "./Tag.scss"; // Importation des styles spécifiques pour les tags.

function Tag({ tag }) {

    return (
        <span className="tag">{tag}</span>
    );
}

export default Tag;
