import './Section.css';

// object --> title, subtitle, date, location, info 

export default function Section({ data }) {
    return (
        <div className='data'>
            <p>{ data.date }</p>
            <h2>{ data.title }</h2>
            <h3>{ data.subtitle }</h3>
            <p>{ data.info }</p>
            <DisplaySkills data={data} />
            <DisplayLink data={data} />
        </div>
    );
}

// ================================

function DisplayLink ({data}) {
    if(data.link != '') {
        return <a class='btn btn-secondary' href={ data.link } target="_blank" rel="noopener noreferrer">GitHub Repository</a>;
    }
    else {
        return null;
    }
}

function DisplaySkills ({data}) {
    if(data.skills != '') {
        let skillsArray = data.skills.split(',');
        for (let i=0; i<skillsArray.length; i++){
            skillsArray[i] = <a class='btn btn-primary'>{skillsArray[i]}</a>
        }
        return skillsArray;
    }
    else {
        return null;
    }
}