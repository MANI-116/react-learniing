export default function StoryTray({ stories }) {
    let NewStories = [...stories]
    NewStories.push({
        id: 'create',
        label: 'Create Story'
    });

    return (
        <ul>
            {NewStories.map(story => (
                <li key={story.id}>
                    {story.label}
                </li>
            ))}
        </ul>
    );
}

//stories may be an object/array passed.So if we change stories directly ,we change the reference passed and that may lead to impurity
//of the component by copying elements we made the component more pure
