import React from 'react'

export default props =><button type="button" className={`btn btn-success btn-lg ${props.classes}`} onClick={props.save}>{props.children}</button>