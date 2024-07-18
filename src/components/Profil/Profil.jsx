import "./Profil.scss";

function Profil() {
    const { host } = logement; 
    
    return (
        <>
            <p>{host.name}</p>
            <img src={host.picture} alt="Profil de l'hôte" />        </>
    )
}

export default Profil;
// <div className="logement-content">
//     <div className="logement-info">
//         <h1>{logement.title}</h1>
//         <p>{logement.location}</p>
//         <div className="logement-tags">
//             {logement.tags.map((tag, index) => (
//             <span key={index} className="tag">{tag}</span>
//             ))}
//         </div>
//         </div>
//         <div>
//         <div className="logement-host">
//             <p>{logement.host.name}</p>
//             <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
//         </div>
//         <div className="logement-rating">
//             {Array.from({ length: 5 }, (v, i) => (
//             <span key={i} className={`star ${i < logement.rating ? 'filled' : ''}`}>&#9733;</span>
//             ))}
//         </div>
//     </div>
// </div>