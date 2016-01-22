jest.dontMock('../Application.jsx');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

describe('Application Route', () => {
    const Application = require('../Application.jsx');

    it('renders into the document', () => {
        var app = TestUtils.renderIntoDocument(<Application />);
        expect(TestUtils.isCompositeComponent(app)).toBeTruthy();
    });
});