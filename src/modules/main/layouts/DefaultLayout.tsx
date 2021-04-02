import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';
import DefaultAppBar from '../components/DefaultAppBar';
import MessageList from '../components/MessageList';
import DefaultLayoutProps from '../interfaces/DefaultLayoutProps';
import RateLimitProvider from '../components/RateLimitProvider';
import RateLimit from '../interfaces/RateLimit';
import MessageForm from '../components/MessageForm';

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
  user,
}: DefaultLayoutProps) => (
  <Box display='flex' flexDirection='column' className='app'>
    <DefaultAppBar />
    <MessageList user={user} />
    <RateLimitProvider
      user={user}
      renderChildren={(rateLimit: RateLimit, isLoading: boolean) => (
        <MessageForm
          userUid={user.uid}
          rateLimit={rateLimit}
          isLoading={isLoading}
        />
      )}
    />
  </Box>
);

export default DefaultLayout;
