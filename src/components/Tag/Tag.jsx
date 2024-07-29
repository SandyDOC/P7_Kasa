import "./Tag.scss"; // Importation des styles spécifiques pour les tags.

function Tag({tags}) {
    // const { tags } = props; // Extraction des tags depuis les propriétés reçues.

    return (
        // <>
        <section className="tags">

            {tags.map((tag, index) =>
             (
                <span key={index} className="tag">{tag}</span>
            ))
            }
        </section>
        // </>
    );
}

export default Tag;
// const location = "Paris 10";
{/* <span className="tag">{location}</span> */ }