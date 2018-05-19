import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    <div>
        <h1 className="center">this is the secret op list</h1>
        <ol>
        <li>secret agent woman</li>
        <li>secret agent man</li>
        <li>secret agent gender fluid</li>
        <li>secret agent cactus</li>
        <li>secret agent platypus</li>
        <li>secret agent octopus</li>

        </ol>
    </div>
)

export default auth(OpList);