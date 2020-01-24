import React, { Component } from "react";
import ReactModal from "react-modal";
import ResultInfo from "./ResultInfo";
import GameInfo from "./GameInfo";
import './Counter.scss';
import './ReactModal.scss';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ran: "",
            id: "",
            temp: Math.floor(Math.random() * 3 + 1),
            userPoint: 0,
            pcPoint: 0,
            roundLimit: 0,
            roundWinner: "",
            showModal: "false",
            endGame: "false"
        };

        this.lottery = this.lottery.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.endGameModalOpen = this.endGameModalOpen.bind(this);
        this.endGameModalClose = this.endGameModalClose.bind(this);
    }
    lottery = (event, temp, roundLimit, pcPoint, userPoint) => {

        const users_choice = event.target.id;
        this.setState({ id: users_choice });

        const PC_choice = ["paper", "stone", "scissors"][Math.floor(Math.random() * 3)];
        this.setState({ ran: PC_choice });

        if (
            this.state.roundLimit !== this.state.userPoint &&
            this.state.roundLimit !== this.state.pcPoint
        ) {
            if (
                (users_choice === "paper" && PC_choice === "stone") ||
                (users_choice === "stone" && PC_choice === "scissors") ||
                (users_choice === "scissors" && PC_choice === "paper")
            ) {
                this.setState(({ userPoint, roundWinner }) => ({
                    userPoint: userPoint + 1,
                    roundWinner: "User"
                }));
            } else if (users_choice === PC_choice) {
                this.setState(({ roundWinner }) => ({
                    roundWinner: "Draw"
                }));
            } else {
                this.setState(({ pcPoint, roundWinner }) => ({
                    pcPoint: pcPoint + 1,
                    roundWinner: "PC"
                }));
            }
        } else {
            this.setState(({ pcPoint, userPoint }) => ({
                pcPoint: 0,
                userPoint: 0,
                roundLimit: 0,
                id: "",
                ran: "",
                roundWinner: "",
                endGame: "true"
            }));
        }
    };

    handleChange(event) {
        this.setState({ roundLimit: parseInt(event.target.value) });
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    endGameModalOpen = e => {
        e.preventDefault();
        this.setState({ endGame: true });

    }

    endGameModalClose = () => {
        this.setState({ endGame: false });
    }

    render(props) {

        return (
            <>
                <div className="board">
                    <div className="title_row">
                        <h1>Paper, Stone, Scissors</h1>
                    </div>
                </div>

                <div className="board">
                    <div className="submit_row">

                        <button
                            onClick={this.handleOpenModal}
                            disabled={!this.state.roundLimit ? false : true}
                            className={!this.state.roundLimit ? "green btn-game" : "red btn-game"}
                        >
                        </button>

                        <ReactModal className="modal" isOpen={this.state.showModal}>
                            <button className="modal_btn" onClick={this.handleCloseModal}>X</button>
                            <p className="modal_text">Enter the number of rounds</p>
                            <div className="modal_input">
                                <input
                                    className="modal_input"
                                    type="number"
                                    roundLimit={this.state.value}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </ReactModal>

                        <ReactModal className="modal" isOpen={this.state.endGame}>
                            <button className="modal_btn" onClick={this.endGameModalClose}>X</button>
                            <p className="modal_text">END GAME</p>
                        </ReactModal>

                        <button
                            onClick={this.lottery}
                            id="paper"
                            disabled={!this.state.roundLimit ? true : false}
                            className={!this.state.roundLimit ? "red btn-paper" : "green btn-paper"}
                        >
                        </button>

                        <button
                            onClick={this.lottery}
                            id="stone"
                            disabled={!this.state.roundLimit ? true : false}
                            className={!this.state.roundLimit ? "red btn-stone" : "green btn-stone"}
                        >
                        </button>

                        <button
                            onClick={this.lottery}
                            id="scissors"
                            disabled={!this.state.roundLimit ? true : false}
                            className={!this.state.roundLimit ? "red btn-scissors" : "green btn-scissors"}
                        >
                        </button>

                    </div>

                    {this.state.id ?

                        <ResultInfo
                            id={this.state.id}
                            roundLimit={this.state.roundLimit}
                            ran={this.state.ran}
                            roundWinner={this.state.roundWinner}
                            userPoint={this.state.userPoint}
                            pcPoint={this.state.pcPoint}
                        /> :

                        <GameInfo
                            roundLimit={this.state.roundLimit}
                        ></GameInfo>}

                </div>
            </>
        );
    }
}



export default Counter;
