import React from 'react';

class Show extends React.Component {
    render() {
        const {person} = this.props;
        const knownForRender = person.known_for.map(x=>{
            return(
                <div className="item">
                        <img src={`https://image.tmdb.org/t/p/w45/${x.poster_path}`} alt="poster"/>
                        <div className="header">{x.title}</div>
                </div>
            );
        })
        return(
            <div className="ui card">
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} alt="avatar" />
                </div>
                <div className="content">
                    <h5 className="header">{person.name}</h5>
                    <div className="description">
                        <h5>Known for:</h5>
                        <div className="">
                            {knownForRender}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Show;
