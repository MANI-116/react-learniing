export default function ColorSwitch({
    onChangeColor
}) {

    return (
        <button onclick={onChangeColor}>
            Change color
        </button>
    );
}

// This ColorSwitch component renders a button. It’s supposed to change the page color. Wire it up to the onChangeColor event handler prop it receives from the parent so that clicking the button changes the color.

// After you do this, notice that clicking the button also increments the page click counter. Your colleague who wrote the parent component insists that onChangeColor does not increment any counters. What else might be happening? Fix it so that clicking the button only changes the color, and does not increment the counter.
