import { describe, it, expect, vi, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import {  renderPosts } from './main.ts';
import { isImageModule, isButton } from './typeHelpers.ts';
import { posts } from './data';

describe('Main functionality tests', () => {
  let document: Document;

  beforeEach(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <div class="cards">
            <button id="view-more">View More</button>
          </div>
        </body>
      </html>
    `);
    document = dom.window.document;
    vi.stubGlobal('document', document);
  });

  it('should have necessary elements in the DOM', () => {
    expect(document.querySelector('.cards')).not.toBeNull();
    expect(document.getElementById('view-more')).not.toBeNull();
  });

  it('should use placeholder image when image is not found', () => {
    const mockImages = {
      '/src/images/nonexistent.jpg': undefined,
    };
    vi.stubGlobal('images', mockImages);

    const button = document.getElementById('view-more') as HTMLButtonElement;
    const mockPost = {
      ...posts[0],
      imgSrc: 'nonexistent.jpg',
    };

    renderPosts([mockPost], button);

    const img = document.querySelector('img');
    expect(img).not.toBeNull();
    expect(img?.src).toContain('/src/images/placeholder.jpg');
  });

  it('isImageModule should correctly identify ImageModule objects', () => {
    expect(isImageModule({ default: 'path/to/image.jpg' })).toBe(true);
    expect(isImageModule({ something: 'else' })).toBe(false);
    expect(isImageModule(null)).toBe(false);
    expect(isImageModule('string')).toBe(false);
  });

  it('isButton should correctly identify button elements', () => {
    const button = document.createElement('button');
    const div = document.createElement('div');
    
    expect(isButton(button)).toBe(true);
    expect(isButton(div)).toBe(false);
  });
});