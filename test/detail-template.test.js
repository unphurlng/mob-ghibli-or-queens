const test = QUnit.test;

QUnit.module('TEMPLATE TEST');

const movie = `
<dl>
    <span>
        <dt>Title:</dt>            
        <dd>Castle In The Sky</dd>
    </span>

    <span>
        <dt>Year Released</dt>
        <dd>1986</dd>
    </span>

    <span>
        <dt>Description</dt>
        <dd>1986</dd>
    </span>

    <span>
        <dt>Director</dt>
        <dd>1986</dd>
    </span>
</dl>
`;

function detailTemplate() {
    return `
    <dl>
        <span>
            <dt>Title:</dt>            
            <dd>Castle In The Sky</dd>
        </span>

        <span>
            <dt>Year Released</dt>
            <dd>1986</dd>
        </span>

        <span>
            <dt>Description</dt>
            <dd>1986</dd>
        </span>

        <span>
            <dt>Director</dt>
            <dd>1986</dd>
        </span>
    </dl>
    `;
}


test('dynamically populate the DDs', assert => {
    //arrange
    const expected = `
    <dl>
        <span>
            <dt>Title:</dt>            
            <dd>Castle In The Sky</dd>
        </span>

        <span>
            <dt>Year Released</dt>
            <dd>1986</dd>
        </span>

        <span>
            <dt>Description</dt>
            <dd>1986</dd>
        </span>

        <span>
            <dt>Director</dt>
            <dd>1986</dd>
        </span>
    </dl>
    `;
    //act
    const result = detailTemplate();
    //assert
    assert.equal(result, expected);
});