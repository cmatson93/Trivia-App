import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = ({ children, href }) => (
    <LinkWithStyles href={href}>
        <a>
            {children}
        </a>
    </LinkWithStyles>
);

const LinkWithStyles = styled(Link)`
    color: ${props => props.theme.colors.slate};
`;

export default StyledLink;