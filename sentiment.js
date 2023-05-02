import {PythonShell} from 'python-shell';

PythonShell.run('sentiment.py', null).then(messages=>{
    console.log('finished');
  });
    
