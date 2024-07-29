import "./Tag.scss"; // Importation des styles spécifiques pour les tags.

function Tag({tags}) {

    return (
        <section className="tags">
            {tags.map((tag, index) =>
             (
                <span key={index} className="tag">{tag}</span>
            ))
            }
        </section>
    );
}

export default Tag;
