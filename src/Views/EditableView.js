import React from "react";
import EditablePage from "../Objects/EditablePage";
import EditableBlock from "../Elements/EditableBlock";
import './EditableView.css'
import { Responsive, WidthProvider } from 'react-grid-layout';
import { supabase } from "../supabaseClient";

class EditableView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ResponsiveGridLayout = WidthProvider(Responsive);

        const gridLayout = [
            { i: "a", x: 0, y: 0, w: 1, h: 1 },
            { i: "b", x: 1, y: 0, w: 1, h: 1 },
            { i: "c", x: 2, y: 0, w: 1, h: 1 },
            { i: "d", x: 0, y: 0, w: 1, h: 1 },
            { i: "e", x: 1, y: 0, w: 1, h: 1 }
        ]

        return (
            <div className="view-container">
                {/* <div className="display-buttons-container">
                    <button className="display-button">Grid</button>
                    <button className="display-button">Knowledge Graph</button>
                    <button className="display-button">Calendar</button>
                    <button className="display-button">List</button>
                </div> */}
                <button className="add-page-button">Add Page</button>
                <ResponsiveGridLayout
                    layouts={{lg: gridLayout}}
                    breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{lg: 3, md: 3, sm: 3, xs: 1, xxs: 1}} 
                    rowHeight={200} 
                >
                    <div className="item-wrapper" key="a">
                        <div className="item-content">A</div>
                    </div>
                    <div className="item-wrapper" key="b">
                        <div className="item-content">B</div>
                    </div>
                    <div className="item-wrapper" key="c">
                        <div className="item-content">C</div>
                    </div>
                    <div className="item-wrapper" key="d">
                        <div className="item-content">D</div>
                    </div>
                    <div className="item-wrapper" key="e">
                        <div className="item-content">E</div>
                    </div>
                </ResponsiveGridLayout>
                
            </div>
        )
    }

}

export default EditableView;