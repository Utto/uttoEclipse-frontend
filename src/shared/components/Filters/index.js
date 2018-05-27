import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Filters extends Component {
	static propTypes = {
		data: PropTypes.shape({
			start: PropTypes.object,
			end: PropTypes.object,
			startError: PropTypes.string,
			endError: PropTypes.string,
		}),
		change: PropTypes.func,
		applyFilters: PropTypes.func,
	};

	getCurrentTarget = (date, label, type) => {
		const { data } = this.props;
		let target = date;
		if (type === 'date' && data[label]) {
			target = new Date(data[label]);
		}
		return target;
	}


	handleSelect = (label, type) => (e, date) => {
		const { data, change } = this.props;
		let current = date;
		if (type === 'time' && data[label]) current = new Date(data[label]);
		const target = this.getCurrentTarget(date, label, type);

		const hours = target ? target.getHours() : 0;
		const minutes = target ? target.getMinutes() : 0;

		current.setHours(hours);
		current.setMinutes(minutes);
		current.setSeconds(0);

		change({ variables: { value: current, label } });
	}

	handleChange = label => (e, data) => {
		const { change } = this.props;
		change({ variables: { value: data, label } });
	}

	render() {
		const styles = require('./styles.scss');
		const { data, applyFilters } = this.props;

		return (
			<div className={styles.filters}>
				<Paper zDepth={3} className={styles.paper}>
					<h3 className={styles.title}>Filters</h3>
					<DatePicker
						textFieldStyle={{ width: '100%' }}
						floatingLabelText="Select start date"
						autoOk
						onChange={this.handleSelect('start', 'date')}
						value={data.start}
						errorText={data.startError}
					/>
					{data.start && <TimePicker
						textFieldStyle={{ width: '100%' }}
						hintText="Select start time"
						autoOk
						onChange={this.handleSelect('start', 'time')}
						value={data.start}
					/>}
					<DatePicker
						textFieldStyle={{ width: '100%' }}
						floatingLabelText="Select end date"
						autoOk
						onChange={this.handleSelect('end', 'date')}
						value={data.end}
						errorText={data.endError}
					/>
					{data.end && <TimePicker
						textFieldStyle={{ width: '100%' }}
						hintText="Select end time"
						autoOk
						onChange={this.handleSelect('end', 'time')}
						value={data.end}
					/>}
					<TextField
						hintText="Enter user name or a part of it"
						style={{ width: '100%' }}
						onChange={this.handleChange('name')}
						value={data.name}
					/>
					<TextField
						hintText="Enter a part of user's message"
						multiLine
						rowsMax={10}
						style={{ width: '100%' }}
						onChange={this.handleChange('message')}
						value={data.message}
					/>
					<RaisedButton
						className={styles.button}
						style={{ display: 'block' }}
						backgroundColor="#3b4295"
						labelColor="#fff"
						label="Search by filters"
						disabled={data.buttonDisabled}
						onClick={applyFilters}
					/>
				</Paper>
			</div>
		);
	}
}
