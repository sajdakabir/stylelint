```javascript
// Using postcss-safe-parser directly to prevent custom parser injection
// This ensures only the validated safe parser is used
import safeParser from 'postcss-safe-parser/lib/safe-parser';

// Export the validated safe parser instance
export default safeParser;
```