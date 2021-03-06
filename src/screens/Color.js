import React from 'react';

import { Box, Text, ThemeContext } from 'grommet';

import Page from '../components/Page';
import Doc from '../components/Doc';

const BRAND_REGEXP = /^brand/i;
const ACCENT_REGEXP = /^accent-/i;
const NEUTRAL_REGEXP = /^neutral-/i;
const STATUS_REGEXP = /^status-/i;
const LIGHT_REGEXP = /^light-/i;
const DARK_REGEXP = /^dark-/i;

const Cell = ({ name, value }) => (
  <Box basis='small' margin={{ bottom: 'medium' }}>
    <Box pad='medium' background={name} />
    <Text><strong>{name}</strong></Text>
    <Text>{value}</Text>
  </Box>
);

const Set = ({ regexp, colors }) => (
  <Box direction='row' wrap={true} gap='medium'>
    {Object.keys(colors)
      .filter(name => regexp.test(name))
      .map(name => (
        <Cell key={name} name={name} value={colors[name]} />
      ))}
  </Box>
);

const Color = () => (
  <Page>
    <Doc name='Color'>
      <ThemeContext.Consumer>
        {theme => (
          <Box gap='large'>
            <Set regexp={BRAND_REGEXP} colors={theme.global.colors} />
            <Set regexp={ACCENT_REGEXP} colors={theme.global.colors} />
            <Set regexp={NEUTRAL_REGEXP} colors={theme.global.colors} />
            <Set regexp={STATUS_REGEXP} colors={theme.global.colors} />
            <Set regexp={LIGHT_REGEXP} colors={theme.global.colors} />
            <Set regexp={DARK_REGEXP} colors={theme.global.colors} />
          </Box>
        )}
      </ThemeContext.Consumer>
    </Doc>
  </Page>
);

export default Color;
