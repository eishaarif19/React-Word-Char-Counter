import React, { useReducer } from 'react';
import CharacterCount from './CharacterCount';
import WordCount from './WordCount';
import CharacterMap from './CharacterMap';

import '../App.css';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const reducer = (state, action) => {
    return {
        ...state,
        [action]: !state[action]
    }
}
export default function TextInformation() {
    const [tabs, toggleTabs] = useReducer(reducer, {
        characterCount: true,
        wordCount: true,
        characterMap: true
    });

    return (
        <div>

            <ButtonGroup variant="text" color="secondary" aria-label="text button group">
                <Button onClick={() => toggleTabs('characterCount')}>Character Count</Button>
                <Button onClick={() => toggleTabs('wordCount')}>Word Count</Button>
                <Button onClick={() => toggleTabs('characterMap')}>Character Map</Button>
            </ButtonGroup>
            <div className='display'>

                <CharacterCount show={tabs.characterCount} />
                <br />
                <WordCount show={tabs.wordCount} />
                <br />
                <CharacterMap show={tabs.characterMap} />
            </div>

        </div>
    )
}