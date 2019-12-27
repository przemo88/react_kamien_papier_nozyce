import React, { Component } from 'react';
import './ResultInfo.scss';

class ResultInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userPoint: 0,
            pcPoint: 0,
            roundLimit: this.props.round,
            roundWinner: '',
        }
    }


    componentWillReceiveProps() {
        if (this.state.roundLimit > this.state.userPoint && this.state.roundLimit > this.state.pcPoint) {

            if ((this.props.id === "papier" && this.props.ran === "kamień") ||
                (this.props.id === "kamień" && this.props.ran === "nożyce") ||
                (this.props.id === "nożyce" && this.props.ran === "papier")) {
                this.setState(({ userPoint, roundWinner }) => ({
                    userPoint: userPoint + 1,
                    roundWinner: 'Użytkownik'
                }));
            }

            else if (this.props.id === this.props.ran) {
                this.setState(({ roundWinner }) => ({
                    roundWinner: 'Remis',
                }))
            }
            else {
                this.setState(({ pcPoint, roundWinner }) => ({
                    pcPoint: pcPoint + 1,
                    roundWinner: 'Komputer',
                }));
            }
        }
        else {
            alert('koniec gry');
            this.setState(({ roundLimit }) => ({
                roundLimit: 0,

            }));
        }
    }



    render(props) {

        return (

            <>
                <div className="top">Wybrałeś: {`${this.props.id}`}</div>
                <div>Ilość rund: {`${this.props.round}`}</div>
                <div>Komputer wylosował: {`${this.props.ran}`}</div>
                <div>Wygrał: {this.state.roundWinner}</div>
                <div>Punkty gracza: {this.state.userPoint}</div>
                <div>Punkty komputera: {this.state.pcPoint}</div>
            </>
        )
    }
}

export default ResultInfo;
