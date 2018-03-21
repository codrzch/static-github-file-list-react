import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './time';
import './index.css';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file =>
        /* FileListItem Is Used Here */
        <FileListItem key={file.id} file={file}/>
      )}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array
};

const FileListItem = ({ file }) => (
	<tr className="file-list-item">
		<td className="file-icon">
			<FileIcon file={file}/>
		</td>
		<td className="file-name">
			<FileName file={file}/>
		</td>
		<td className="commit-message">
			<CommitMessage commit={file.latestCommit} />
		</td>
		<td className="age">
			<Time time={file.updated_at}/>
		</td>
	</tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

const CommitMessage = ({ commit }) => (
	<span>{commit.message}</span>
);
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if(file.type === 'folder') {
    icon = 'fa-folder';
  }

  return (
		<i className={`fa ${icon}`}/>
  );
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

function FileName({ file }) {
  return (
    <span>{file.name}</span>
  );
}
FileName.propTypes = {
  file: PropTypes.object.isRequired
};

const testFiles = [
  {
    id: 1,
    name: "public",
    type: "folder",
    updated_at: "2017-07-11 21:24:00",
    latestCommit: {
      message: "Initial Commit"
    }
  },
  {
    id: 2,
    name: "src",
    type: "folder",
    updated_at: "2017-07-11 21:24:00",
    latestCommit: {
      message: "Initial Commit"
    }
  },
  {
    id: 3,
    name: ".gitignore",
    type: "file",
    updated_at: "2017-07-18 21:24:00",
    latestCommit: {
      message: "Initial Commit"
    }
  },
  {
    id: 4,
    name: "README.md",
    type: "file",
    updated_at: "2017-09-18 21:24:00",
    latestCommit: {
      message: "Update ReadMe"
    }
  },
  {
    id: 5,
    name: "package.json",
    type: "file",
    updated_at: "2017-07-18 21:24:00",
    latestCommit: {
      message: "Initial Commit"
    }
  },
  {
    id: 6,
    name: "yarn.lock",
    type: "file",
    updated_at: "2017-07-18 21:24:00",
    latestCommit: {
      message: "Initial Commit"
    }
  }
];

ReactDOM.render(<FileList files={testFiles}/>, document.querySelector('#root'));

export { FileList, testFiles };  // Testing
