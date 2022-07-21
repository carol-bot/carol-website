import React from "react";

class Page extends React.Component {
    render() {
        return(
            <div className="page" style={{maxHeight: (window.innerHeight * 0.2)}}>
                {this.props.cont}
                <div className='page-number'>{this.props.pageN}</div>
            </div>
        );
    }
}

class PageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [
                "A melody is heard, played upon a flute. It is small and fine, telling\n" +
                "of grass and trees and the horizon. The curtain rises.\n" +
                "Before us is the salesman’s house. We are aware of towering,\n" +
                "angular shapes behind it, surrounding it on all sides. Only the blue\n" +
                "light of the sky falls upon the house and forestage; the surrounding\n" +
                "area shows an angry glow of orange.",

                "As more light appears, we see a\n" +
                "solid vault of apartment houses around the small, fragile-seeming\n" +
                "home. An air of the dream clings to the place, a dream rising out of\n" +
                "reality. The kitchen at center seems actual enough, for there is a\n" +
                "kitchen table with three chairs, and a refrigerator.",

                "But no other fixtures\n" +
                "are seen. At the back of the kitchen there is a draped entrance, which\n" +
                "leads to the living-room. To the right of the kitchen, on a level raised\n" +
                "two feet, is a bedroom furnished only with a brass bedstead and a\n" +
                "straight chair.",

                "On a shelf over the bed a silver athletic trophy stands.\n" +
                "A window opens on to the apartment house at the side.\n" +
                "Behind the kitchen, on a level raised six and a half feet, is the\n" +
                "boys’ bedroom, at present barely visible.",

                "Two beds are dimly seen,\n" +
                "and at the back of the room a dormer window. (This bedroom is\n" +
                "above the unseen living-room.) At the left a stairway curves up to\n" +
                "it from the kitchen.",

                "The entire setting is wholly or, in some places, partially transparent. The roof-line of the house is one-dimensional; under and\n" +
                "over it we see the apartment buildings. Before the house lies an\n" +
                "apron, curving beyond the forestage into the orchestra.",

                "This forward\n" +
                "area serves as the back yard as well as the locale of all Willy’s\n" +
                "imaginings and of his city scenes. Whenever the action is in the\n" +
                "present the actors observe the imaginary wall-lines, entering the\n" +
                "house only through its door at the left.",

                "But in the scenes of the past\n" +
                "these boundaries are broken, and characters enter or leave a room by\n" +
                "stepping ‘‘through’’ a wall on to the forestage.",

                "[From the right, willy loman, the Salesman, enters, carrying two large sample cases. The flute plays on. He hears\n" +
                "but is not aware of it. He is past sixty years of age, dressed\n" +
                "quietly.",

                "Even as he crosses the stage to the doorway of the\n" +
                "house, his exhaustion is apparent. He unlocks the door, comes\n" +
                "into the kitchen, and thankfully lets his burden down, feeling\n" +
                "the soreness of his palms."
            ],
            showPages: [0, 4],
        };
    }

    scrollUp() {
        const showIndex = this.state.showPages;

        if (showIndex[0] !== 0) {
            this.setState({
                showPages: [showIndex[0] - 4, showIndex[1] - 4],
            })
        }
    }

    scrollDown() {
        const showIndex = this.state.showPages;

        if (!(showIndex[1] >= this.state.pages.length)) {
            this.setState({
                showPages: [showIndex[0] + 4, showIndex[1] + 4],
            })
        }
    }


    render() {
        const showIndex = this.state.showPages;
        const showPages = this.state.pages.slice(showIndex[0], showIndex[1]);
        const show = showPages.map((page, index) => {
            return (
                <Page cont={page} pageN={index + showIndex[0] + 1} />
            );
        });

        return(
            <div className="col-2 ">
                <div className='row' style={{height: (window.innerHeight * 0.05)}}>
                    <button className='page-scroll' onClick={() => this.scrollUp()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className="bi bi-chevron-compact-up page-scroll-icon" viewBox="0 0 15 10">
                            <path fill-rule="evenodd"
                                  d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
                        </svg>
                    </button>
                </div>
                <div className='row' style={{height: (window.innerHeight * 0.90)}}>
                    {show}
                </div>
                <div className='row' style={{height: (window.innerHeight * 0.05)}}>
                    <button className='page-scroll' onClick={() => this.scrollDown()}>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"
                             className="bi bi-chevron-compact-down page-scroll-icon" viewBox="0 3 15 10">
                            <path fill-rule="evenodd"
                                  d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
                    </button>
                </div>
            </div>
    );
    }
}

export default PageList;