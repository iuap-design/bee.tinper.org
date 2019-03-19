import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Pagination from '../src/index'
import App from '../demo/PaginationDemo.js'


describe('Pagination test', function() {
	
	it('Pagination should be exist', function() {

		
		let pagination = mount(<Pagination />);

		expect(pagination.find('ul').hasClass('u-pagination')).to.equal(true);
		
	})

	it('Pagination length should be right', function() {

		
		let pagination = mount(<Pagination items={10}/>);


		expect(pagination.find('ul').find('li').length).to.equal(10);
		
	})

	it('no border page button should be exist', function() {

		
		let pagination = mount(<Pagination items={10} activePage={2} noBorder/>);

		expect(pagination.find('ul').hasClass('u-pagination-no-border')).to.equal(true);
		
	})

	it('gap page button should be exist', function() {

		
		let pagination = mount(<Pagination items={10} activePage={2} gap/>);

		expect(pagination.find('ul').hasClass('u-pagination-gap')).to.equal(true);
		
	})

	it('lg size should be right', function() {

		
		let pagination = mount(<Pagination items={10} activePage={2} size="lg"/>);

		expect(pagination.find('ul').hasClass('u-pagination-lg')).to.equal(true);
		
	})

	it('sm size should be right', function() {

		
		let pagination = mount(<Pagination items={10} activePage={2} size="sm"/>);

		expect(pagination.find('ul').hasClass('u-pagination-sm')).to.equal(true);
		
	})

	it('active page should be right', function() {

		
		let pagination = mount(<Pagination items={10} activePage={2}/>);

		expect(pagination.find('ul').find('li').at(1).hasClass('active')).to.equal(true);
		
	})

	it('previous button should be exist', function() {

		
		let pagination = mount(<Pagination prev items={10} activePage={2}/>);

		expect(pagination.find('ul').find('li').at(0).find('span').prop('aria-label')).to.equal('Previous');
		
	})
	it('next button should be exist', function() {

		
		let pagination = mount(<Pagination prev next items={10} activePage={2}/>);

		expect(pagination.find('ul').find('li').last().find('span').prop('aria-label')).to.equal('Next');
		
	})
	it('first button should be exist', function() {

		
		let pagination = mount(<Pagination first prev next items={10} activePage={2}/>);

		expect(pagination.find('ul').find('li').at(0).find('span').prop('aria-label')).to.equal('First');
		
	})
	it('last button should be exist', function() {

		
		let pagination = mount(<Pagination first prev next last items={10} activePage={2}/>);

		expect(pagination.find('ul').find('li').last().find('span').prop('aria-label')).to.equal('Last');
		
	})
	it('more button should be exist', function() {

		
		let pagination = mount(<Pagination items={10} activePage={2} maxButtons={5}/>);

		expect(pagination.find('ul').find('li').at(5).find('span').prop('aria-label')).to.equal('More');
		
	})
	it('last boundary text should be 10', function() {

		
		let pagination = mount(<Pagination boundaryLinks items={10} activePage={2} maxButtons={5}/>);

		expect(pagination.find('ul').find('li').last().text()).to.equal('10');
		
	})
	it('fist boundary text should be 10', function() {

		
		let pagination = mount(<Pagination boundaryLinks items={10} activePage={2} maxButtons={5}/>);

		expect(pagination.find('ul').find('li').at(0).text()).to.equal('1');
		
	})
	
})

describe('App test', function() {
	
	it('before more button should be show when click the maxButtons', function() {

		
		let app = mount(<App />);

		app.setState({activePage:5});

		expect(app.find('li').at(3).find('span').prop('aria-label')).to.equal('More');
		
	})
	it('after more button should be show when click the maxButtons', function() {

		
		let app = mount(<App />);

		app.setState({activePage:5});

		expect(app.find('li').at(9).find('span').prop('aria-label')).to.equal('More');
		
	})
})