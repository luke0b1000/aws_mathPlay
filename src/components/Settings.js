import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    toggleAddition,
    toggleSubtraction,
    toggleMultiplication,
    toggleDivision,
    toggleHistory,
    levelChange,
    toggleAutoCheck,
    toggleSound,
} from '../actions/settings';
import { clearHistory } from '../actions/history';

class Settings extends Component {
    clearHistory = () => {
        this.props.clearHistory();
        this.props.LocalStorage.clearHistory();
    };
    textChange = e => {
        if (e.target.name === 'settingLevel') {
            if (e.target.value >= 1 && e.target.value <= 3) {
                this.props.levelChange(e.target.value);
            }
        }
    };
    toggleAction = e =>
        new Promise((resolve, reject) => {
            switch (e.target.name) {
                case 'addition':
                    this.props.toggleAddition();
                    break;
                case 'subtraction':
                    this.props.toggleSubtraction();
                    break;
                case 'multiplication':
                    this.props.toggleMultiplication();
                    break;
                case 'division':
                    this.props.toggleDivision();
                    break;
                default:
                    return;
            }
            resolve(e);
        });
    handleSettingOperation = e => {
        // !!! CLEANUP ugle
        e.persist();
        this.toggleAction(e).then(e => {
            if (this.props.settingOperationArr.length < 1) {
                this.toggleAction(e);
            }
        });
    };
    render() {
        const {
            addition,
            subtraction,
            multiplication,
            division,
            settingLevel,
            settingHistory,
            settingAutoCheck,
            settingSound,
        } = this.props;
        return (
            <div>
                <h1>Settings</h1>
                <section className="settings">
                    <input
                        className="settings-level"
                        type="number"
                        min="1"
                        max="3"
                        name="settingLevel"
                        value={settingLevel}
                        placeholder="Type Level"
                        onChange={this.textChange}
                    />
                    <div className="labeltext">Level 1, 2, 3</div>
                    <label className="switch">
                        <input
                            name="addition"
                            type="checkbox"
                            checked={addition}
                            onChange={this.handleSettingOperation}
                        />
                        <span className="slider round" />
                    </label>
                    <div className="labeltext">Addition</div>
                    <label className="switch">
                        <input
                            name="subtraction"
                            type="checkbox"
                            checked={subtraction}
                            onChange={this.handleSettingOperation}
                        />
                        />
                        <span className="slider round" />
                    </label>
                    <div className="labeltext">Subtraction</div>
                    <label className="switch">
                        <input
                            name="multiplication"
                            type="checkbox"
                            checked={multiplication}
                            onChange={this.handleSettingOperation}
                        />
                        <span className="slider round" />
                    </label>
                    <div className="labeltext">Multiplication</div>
                    <label className="switch">
                        <input
                            name="division"
                            type="checkbox"
                            checked={division}
                            onChange={this.handleSettingOperation}
                        />
                        <span className="slider round" />
                    </label>
                    <div className="labeltext">Division</div>
                    <label className="switch">
                        <input
                            name="sound"
                            type="checkbox"
                            checked={settingSound}
                            onChange={this.props.toggleSound}
                        />
                        <span className="slider round" />
                    </label>
                    <div className="labeltext">Sound</div>
                    <label className="switch">
                        <input
                            name="autocheck"
                            type="checkbox"
                            checked={settingAutoCheck}
                            onChange={this.props.toggleAutoCheck}
                        />
                        <span className="slider round" />
                    </label>
                    <div className="labeltext">AutoCheck</div>
                    <label className="switch">
                        <input
                            name="history"
                            type="checkbox"
                            checked={settingHistory}
                            onChange={this.props.toggleHistory}
                        />
                        <span className="slider round" />
                    </label>
                    <div className="labeltext">Show History</div>
                </section>
            </div>
        );
    }
}

function mapStateToProps({ settings }) {
    const {
        addition,
        subtraction,
        multiplication,
        division,
    } = settings.settingOperation;
    const {
        settingAutoCheck,
        settingOperation,
        settingHistory,
        settingLevel,
        settingSound,
    } = settings;
    const settingOperationArr = [];
    for (let prop in settingOperation) {
        if (settingOperation[prop]) settingOperationArr.push(prop);
    }
    return {
        addition,
        subtraction,
        multiplication,
        division,
        settingLevel,
        settingHistory,
        settingOperationArr,
        settingAutoCheck,
        settingSound,
    };
}
function mapStateToDispatch(dispatch) {
    return bindActionCreators(
        {
            toggleAddition,
            toggleSubtraction,
            toggleMultiplication,
            toggleDivision,
            toggleHistory,
            toggleAutoCheck,
            toggleSound,
            levelChange,
            clearHistory,
        },
        dispatch
    );
}
export default connect(
    mapStateToProps,
    mapStateToDispatch
)(Settings);
