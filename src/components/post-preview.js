import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Image from "gatsby-image"
import ReadLink from './read-link'

const PostPreview = ({post}) => (
    <article css={css`
        border-bottom: 1px solid #ddd;
        display: flex;
        margin-top: 0.75rem;
        padding-bottom: 1rem;

        :first-of-type{
            margin-top: 1rem;
        }
    `}>
        <Link to={post.link} css={css`margin 1rem 1rem 0 0; width: 100px;`}>
            <Image
                fluid={post.image.sharp.fluid}
                css={css`
                    * {
                        margin-top:0;
                    }
                
                `}
                alt={post.title}
            />
        </Link>
        <div>
            <h3>
                <Link to={post.slug}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
            <ReadLink to={post.slug}>Read more...</ReadLink>
        </div>
    </article>
)

export default PostPreview