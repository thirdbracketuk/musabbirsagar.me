const API_BASE = "https://thirdbracket.co.uk/api";

export async function fetchBlogs() {
  try {
    const response = await fetch(`${API_BASE}/blog`);
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export async function fetchWork() {
  try {
    const response = await fetch(`${API_BASE}/work`);
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Failed to fetch work:", error);
    return [];
  }
}
