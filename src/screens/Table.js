import React from 'react';

import {
  Table, TableBody, TableCell, TableFooter, TableHeader,
  TableRow,
} from 'grommet';
import doc,
{
  docTableCell, docTableRow, docTableHeader, docTableFooter, docTableBody,
}
  from 'grommet/components/Table/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Table).toJSON();
const descTableCell = docTableCell(TableCell).toJSON();
const descTableRow = docTableRow(TableRow).toJSON();
const descTableHeader = docTableHeader(TableHeader).toJSON();
const descTableFooter = docTableFooter(TableFooter).toJSON();
const descTableBody = docTableBody(TableBody).toJSON();

export default () => (
  <Page>
    <Doc
      name='Table'
      desc={desc}
      example={(
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope='col' border='bottom'>Name</TableCell>
              <TableCell scope='col' border='bottom'>Flavor</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell scope='row'><strong>Eric</strong></TableCell>
              <TableCell>Coconut</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope='row'><strong>Chris</strong></TableCell>
              <TableCell>Watermelon</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    />

    <Doc name='TableCell' nav={false} desc={descTableCell} />

    <Doc name='TableRow' nav={false} desc={descTableRow} />

    <Doc name='TableHeader' nav={false} desc={descTableHeader} />
    <Doc name='TableBody' nav={false} desc={descTableBody} />
    <Doc name='TableFooter' nav={false} desc={descTableFooter} />
  </Page>
);
