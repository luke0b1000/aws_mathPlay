import React, { Component } from 'react';
import MathJax from 'react-mathjax2';
import { connect } from 'react-redux';

class EquationDisplay extends Component {
    render() {
        const { numOne, numTwo, operation } = this.props;
        let tex;
        switch (operation) {
            case 'division':
                tex = String.raw`${numOne}\enclose{longdiv}{${numTwo}}`;
                break;
            default:
                let symbolName = {
                    addition: '+',
                    subtraction: '-',
                    multiplication: String.raw`\times`,
                };
                tex = String.raw`
                        \begin{align}
                        ${numOne}& \\
                        \underline{${symbolName[operation]}\quad ${numTwo}}& \\
                        \end{align}
                    `;
        }
        const options = {
            CommonHTML: { scale: 160 },
            TeX: { extensions: ['enclose.js'] },
        };
        return (
            <section className="mathjax">
                <MathJax.Context input="tex" options={options}>
                    <MathJax.Node>{tex}</MathJax.Node>
                </MathJax.Context>
            </section>
        );
    }
}

function mapStateToProps({ mathObj }) {
    const { numOne, numTwo, operation } = mathObj;
    return { numOne, numTwo, operation };
}

export default connect(mapStateToProps)(EquationDisplay);
